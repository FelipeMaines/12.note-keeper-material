import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class NotificationService{

    constructor(private snackBar: MatSnackBar) {}

    sucesso(msg: string): void{
        this.snackBar.open(msg, 'OK', {
            panelClass: ['snackbar-sucesso'],
            duration: 3000,
        });
    }

    erro(msgErro: string):void {
        this.snackBar.open(msgErro, 'OK', {
            panelClass: ['snackbar-erro'],
        })
    }

    aviso(msgAviso: string):void {
        this.snackBar.open(msgAviso, 'OK', {
            panelClass: ['snackbar-aviso'],
        })
    }
}