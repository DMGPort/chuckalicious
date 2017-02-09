import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AccountService } from './account.service';
import { DialogService } from './dialog.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
    
    constructor(
        private router: Router,
        private accountService: AccountService,
        private dialogService: DialogService,
    ){}
    
    canActivate(): boolean{   
        let authenticated = false;
        if (this.accountService.isAuthenticated) {
            authenticated = true;
        }
        else {
            this.router.navigate(['/home']);
            localStorage.setItem('dialog_message', "Please Log In");
            this.dialogService.openDynoDialog();
        }
        return authenticated;
    }
    
}
