import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
})
export class RegisterUserComponent implements OnInit {
  forma: FormGroup;

  constructor(private fb: FormBuilder, private _userSerice: UserService) {}

  ngOnInit(): void {
    this.crearFormulario();
  }

  crearFormulario() {
    this.forma = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      sex: ['masculino', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  validarCampos(campo: string) {
    return this.forma.get(campo).invalid && this.forma.get(campo).touched;
  }

  guardar() {
    if (this.forma.invalid) {
      Object.values(this.forma.controls).forEach((control) => {
        control.markAsTouched();
      });
    }

    this._userSerice.registrarUsuario(this.forma.value).subscribe(
      (resp) => {
        console.log(resp);
        Swal.fire('Usuario Guardado Exitosamente!', '', 'success');
        this.forma.reset();
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
