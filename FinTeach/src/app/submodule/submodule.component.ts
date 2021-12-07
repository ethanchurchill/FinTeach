//Class defining the Submodule Component
//This encompasses the submodule pages on each module
//There is data retrieval as well as frontend modifications
import { Component, OnInit, Input } from '@angular/core';
import {NgForm} from '@angular/forms';
import { SubmoduleService } from 'src/app/services/submodule-service';
import { QuizService } from 'src/app/services/quiz-service';
import { QuizOptionsService } from 'src/app/services/quizoptions-service';
import { ContentFieldService } from 'src/app/services/contentfield-service';
import { ModuleProgressService } from 'src/app/services/moduleprogress-service';
import { QuizOptions } from 'src/app/models/quizoptions-model';
import { Quiz } from 'src/app/models/quiz-model';
import { ModuleProgress } from 'src/app/models/moduleprogress-model';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-submodule',
  templateUrl: './submodule.component.html',
  styleUrls: ['./submodule.component.css']
})
export class SubmoduleComponent implements OnInit {

  // Submodule content varaibles
  current_submodule?: any;
  module_id?: any;
  submodules?: any; // list of all submodules for module_id
  current_quiz?: any;
  current_quiz_options?: any[];
  current_content_field?: any;
  module_progress?: any;

  // Button variables
  noPrevious?: any;
  showDone?: any;


  constructor(private submoduleService: SubmoduleService,
              private quizService: QuizService,
              private quizoptionsService: QuizOptionsService,
              private contentfieldService: ContentFieldService,
              private moduleprogressService: ModuleProgressService,
              private route: ActivatedRoute) { }
  //Runs on component intiliaztion
  ngOnInit(): void {
    // gets module_id from URL.
    const user_id = JSON.parse(localStorage.getItem('currentUser') || '{}').id;
    this.module_id = this.route.snapshot.paramMap.get("module_id");

    this.current_quiz_options = [];

    // If user is logged in check for module progress. Otherwise, Set to start at the beginning of the module.
    if (user_id) {
      this.current_submodule = 0;
      this.checkModuleProgress(this.module_id, user_id);
    } else {
      this.current_submodule = 0;
      this.loadSubmodule(this.module_id);
    }
  }

  checkModuleProgress(module_id: any, user_id: any): void {
    this.moduleprogressService.getFromId(user_id, module_id)
      .subscribe(
        data => {
          if (data.length != 0) {
            this.module_progress = data[0];
            this.current_submodule = this.module_progress.current_submodule - 1;
            this.loadSubmodule(module_id);
          } else {
            const dataNew = {
              module_id: module_id,
              user_id: user_id
            };

            if(dataNew.module_id == null || dataNew.user_id == null) {
                return;
            }

            //Creates a user using the form info with the Auth Service
            this.moduleprogressService.create(dataNew).subscribe(
              data => {
                this.module_progress = data;
                this.current_submodule =  this.module_progress.current_submodule - 1;
                this.loadSubmodule(module_id);
              },
              err => {
                console.log(err.error.message);
              }
            );
          }
        },
        error => {
          console.log(error);
        });
  }
   //Loads a submodule given a  module id
   //Places it in a variable
  loadSubmodule(module_id: any): void {
    this.submoduleService.getFromModuleId(module_id) //get module's submodules
      .subscribe(
        data => {
          this.submodules = data;
          var submodule_id = this.submodules[this.current_submodule].id
          var content_type = this.submodules[this.current_submodule].type
          this.loadContent(submodule_id, content_type);
          this.moveSubmodule(0); // Disables progression buttons if necessary.
        },
        error => {
          console.log(error);
        });
  }
  //Loads content given a submodule id and content type
  //Populates variables for use in the HTML
  loadContent(submodule_id: any, content_type: any): void {

    if (content_type == 'c') {
      this.contentfieldService.getFromSubmoduleId(submodule_id) // get module's content fields
        .subscribe(
          data => {
            this.current_content_field = data;
          },
          error => {
            console.log(error);
          });
    } else {
      this.quizService.getFromSubmoduleId(submodule_id) // get module's quizes
        .subscribe(
          data => {
            this.current_quiz = data;
            this.current_quiz.forEach((quiz: any) => {
              this.quizoptionsService.getFromQuizId(quiz.id) //add function to get quiz options based on quiz
                .subscribe(
                  data => {
                    if (this.current_quiz_options) {
                      this.current_quiz_options.push(data);
                    }
                  },
                  error => {
                    console.log(error);
                  });
            });
          },
          error => {
            console.log(error);
          });
    }
  }

  // Triggered when form is submitted.
  onSubmit(form: NgForm) {
   console.log(form.value);
   // Object.keys(form.value).forEach((key: any) => {
   //   form.value
   // });
 }

  //Moves forward or backward in submodule progress
  //Changes variables that are utilized by the HTML to determine which progress
  moveSubmodule(moveDirection: any) {

    if (moveDirection == -1) { // move back a submodule.
      this.current_submodule -= 1;
    } else if (moveDirection == 1) { // move forward a submodule.
      this.current_submodule += 1;
      this.noPrevious = false;
      if (this.module_progress) {
        this.progressContinue(this.module_progress.id, this.current_submodule + 1, false);
      }
    }

    var submodule_id = this.submodules[this.current_submodule].id
    var type = this.submodules[this.current_submodule].type
    this.loadContent(submodule_id, type);

    // disable previous button if at the start of the module.
    if (this.current_submodule == 0) {
      this.noPrevious = true;
    }

    this.showDone = false;
    // disable next button if at the end of  the module.
    if (this.current_submodule == this.submodules.length-1) {
      this.showDone = true;
    }
  }

  // Function that updates the moduleprogress object for a user as the user gets to unseen submodules.
  progressContinue(module_progress_id:any, current_submodule:any, module_completed:any) {
    if (this.module_progress.current_submodule - 1 <= this.current_submodule) {
      const updateData = {id: module_progress_id,
                          current_submodule: current_submodule,
                          module_completed: module_completed }

      this.moduleprogressService.update(updateData)
        .subscribe(
          data => {
              console.log(data);
          },
          error => {
            console.log(error);
          });
    }
  }
}
