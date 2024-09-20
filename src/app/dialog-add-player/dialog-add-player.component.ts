import { Component, OnInit } from '@angular/core';

import {
  MatDialog,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';

import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dialog-add-player',

  standalone: true,

  imports: [MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule],

  templateUrl: './dialog-add-player.component.html',

  styleUrl: './dialog-add-player.component.scss',
})
export class DialogAddPlayerComponent implements OnInit {
  name: string = '';

  constructor(public dialogRef: MatDialogRef<DialogAddPlayerComponent>) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
