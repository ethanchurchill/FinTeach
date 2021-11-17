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
  submodules?: any;
  current_quiz?: any;
  current_quiz_options?: any;
  current_content_field?: any;

  constructor(private submoduleService: SubmoduleService,
              private quizService: QuizService,
              private quizoptionsService: QuizOptionsService,
              private contentfieldService: QuizOptionsService,
              private moduleprogressService: ModuleProgressService) { }

  ngOnInit(): void {
    this.current_submodule = 0;
    this.loadSubmodule(1);
  }

  loadSubmodule(module_id: any): void {
    this.submoduleService.getFromModuleId(module_id) //add function to get submodule based on module
      .subscribe(
        data => {
          this.submodules = data;
          var submodule_id = this.submodules[this.current_submodule].id
          var content_type = this.submodules[this.current_submodule].type
          this.loadContent(submodule_id, content_type);
        },
        error => {
          console.log(error);
        });
  }

  loadContent(submodule_id: any, content_type: any): void {
    console.log(submodule_id, content_type);
    if (content_type == 'c') {

    } else {
      this.quizService.getAll() //add function to get quiz based on submodule
        .subscribe(
          data => {
            this.current_quiz = data;
            console.log(data);
          },
          error => {
            console.log(error);
          });

      this.quizoptionsService.getAll() //add function to get quiz options based on quiz
        .subscribe(
          data => {
            this.current_quiz_options = data;
            // data.forEach(quiz_option => {
            //     if (quiz_option.quiz_id == this.current_quiz.id) {
            //       this.current_quiz_options = quiz_option;
            //     }
            //   });
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
  }
}
