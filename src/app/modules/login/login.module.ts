import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/login/login.component";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { LoginService } from "./services/login.service";

const ROUTES: Routes = [
    {
        path: '',
        component: LoginComponent,
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        CommonModule,
        ReactiveFormsModule
    ],
    declarations: [
        LoginComponent,
    ],
    providers: [
        LoginService
    ],
})
export class LoginModule {}