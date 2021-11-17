import { Component, OnInit, Input } from '@angular/core';
import { SubmoduleService } from 'src/app/services/submodule-service';
import { QuizService } from 'src/app/services/quiz-service';
import { QuizOptionsService } from 'src/app/services/quizoptions-service';
import { ContentFieldService } from 'src/app/services/contentfield-service';
import { ModuleProgressService } from 'src/app/services/moduleprogress-service';
import { QuizOptions } from 'src/app/models/quizoptions-model';
import { Quiz } from 'src/app/models/quiz-model';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-submodule',
  templateUrl: './submodule.component.html',
  styleUrls: ['./submodule.component.css']
})
export class SubmoduleComponent implements OnInit {

  // Submodule content varaibles
  current_submodule?: any;
  submodules?: any; // list of all submodules for module_id
  current_quiz?: any;
  current_quiz_options?: any[];
  current_content_field?: any;

  // Button variables
  noPrevious?: any;
  noNext?: any;

  constructor(private submoduleService: SubmoduleService,
              private quizService: QuizService,
              private quizoptionsService: QuizOptionsService,
              private contentfieldService: ContentFieldService,
              private moduleprogressService: ModuleProgressService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    var module_id = this.route.snapshot.paramMap.get("module_id");

    this.current_submodule = 0;
    this.loadSubmodule(module_id);
  }

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
          },
          error => {
            console.log(error);
          });

      // this.current_quiz.forEach(quiz => {
      //   this.quizoptionsService.getFromQuizId(quiz.id) //add function to get quiz options based on quiz
      //     .subscribe(
      //       data => {
      //         this.current_quiz_options.push(data);
      //       },
      //       error => {
      //         console.log(error);
      //       });
      // });
    }
  }

  moveSubmodule(moveDirection: any) {

    if (moveDirection == -1) { // move back a submodule.
      this.current_submodule -= 1;

      var submodule_id = this.submodules[this.current_submodule].id
      var type = this.submodules[this.current_submodule].type
      this.loadContent(submodule_id, type);
      this.noNext = false;
    } else if (moveDirection == 1) { // move forward a submodule.

      this.current_submodule += 1;

      var submodule_id = this.submodules[this.current_submodule].id
      var type = this.submodules[this.current_submodule].type
      this.loadContent(submodule_id, type);
      this.noPrevious = false;
    }

    // disable previous button if at the start of the module.
    if (this.current_submodule == 0) {
      this.noPrevious = true;
    }

    // disable next button if at the end of  the module.
    if (this.current_submodule == this.submodules.length-1) {
      this.noNext = true;
    }
  }
}
