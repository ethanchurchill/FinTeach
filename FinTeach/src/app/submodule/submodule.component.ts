import { Component, OnInit, Input } from '@angular/core';
import { SubmoduleService } from 'src/app/services/submodule-service';
import { QuizService } from 'src/app/services/quiz-service';
import { QuizOptionsService } from 'src/app/services/quizoptions-service';
import { ContentFieldService } from 'src/app/services/contentfield-service';
import { ModuleProgressService } from 'src/app/services/moduleprogress-service';
import { QuizOptions } from 'src/app/models/quizoptions-model';
import { Quiz } from 'src/app/models/quiz-model';


@Component({
  selector: 'app-submodule',
  templateUrl: './submodule.component.html',
  styleUrls: ['./submodule.component.css']
})
export class SubmoduleComponent implements OnInit {

  // @Input()
  //   sumodule_number: number;
  current_submodule?: any;
  current_quiz?: any;
  current_quiz_options?: QuizOptions[];
  current_content_field?: any;

  constructor(private submoduleService: SubmoduleService,
              private quizService: QuizService,
              private quizoptionsService: QuizOptionsService,
              private contentfieldService: QuizOptionsService,
              private moduleprogressService: ModuleProgressService) { }

  ngOnInit(): void {
    this.loadSubmodule(1);
  }

  loadSubmodule(module_id: any): void {
    this.submoduleService.getAll() //add function to get submodule based on module
      .subscribe(
        data => {
          // loop to find submodule belonging too module
          data.forEach(submodule => {
              if (submodule.p_module_id == module_id) {
                this.current_submodule = submodule;
                this.loadContent(submodule.id, submodule.type);
              }
          });
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  loadContent(submodule_id: any, content_type: any): void {
    if (content_type == 'c') {

    } else {
      this.quizService.getAll() //add function to get quiz based on submodule
        .subscribe(
          data => {
            data.forEach(quiz => {
                if (quiz.p_submodule_id == submodule_id) {
                  this.current_quiz = quiz;
                }
            });
            console.log(data);
          },
          error => {
            console.log(error);
          });

      this.quizoptionsService.getAll() //add function to get quiz options based on quiz
        .subscribe(
          data => {
            data.forEach(quiz_option => {
                if (quiz_option.quiz_id == this.current_quiz.id) {
                  this.current_quiz_options.push(quiz_option);
                }
              });
          },
          error => {
            console.log(error);
          });
    }
  }
}
