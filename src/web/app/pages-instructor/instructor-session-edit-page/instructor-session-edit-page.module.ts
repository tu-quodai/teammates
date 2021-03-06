import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgbCollapseModule, NgbDropdownModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AjaxLoadingModule } from '../../components/ajax-loading/ajax-loading.module';
import { CopySessionModalModule } from '../../components/copy-session-modal/copy-session-modal.module';
import { QuestionEditFormModule } from '../../components/question-edit-form/question-edit-form.module';
import { SessionEditFormModule } from '../../components/session-edit-form/session-edit-form.module';
import { TeammatesCommonModule } from '../../components/teammates-common/teammates-common.module';
import {
  CopyQuestionsFromOtherSessionsModalComponent,
} from './copy-questions-from-other-sessions-modal/copy-questions-from-other-sessions-modal.component';
import { InstructorSessionEditPageComponent } from './instructor-session-edit-page.component';
import { TemplateQuestionModalComponent } from './template-question-modal/template-question-modal.component';

const routes: Routes = [
  {
    path: '',
    component: InstructorSessionEditPageComponent,
  },
];

/**
 * Module for instructor session edit page.
 */
@NgModule({
  imports: [
    AjaxLoadingModule,
    CommonModule,
    FormsModule,
    NgbCollapseModule,
    NgbDropdownModule,
    NgbTooltipModule,
    TeammatesCommonModule,
    SessionEditFormModule,
    QuestionEditFormModule,
    CopySessionModalModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [
    TemplateQuestionModalComponent,
    CopyQuestionsFromOtherSessionsModalComponent,
  ],
  declarations: [
    InstructorSessionEditPageComponent,
    TemplateQuestionModalComponent,
    CopyQuestionsFromOtherSessionsModalComponent,
  ],
  exports: [
    InstructorSessionEditPageComponent,
  ],
})
export class InstructorSessionEditPageModule { }
