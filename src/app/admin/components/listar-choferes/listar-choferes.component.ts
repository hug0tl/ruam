import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirestoreDataService } from '../../../auth/services/firestore.service';
import { catchError, finalize, Observable, of } from 'rxjs';
import { UsuariosApiService } from '../../../auth/services/usuarios-api.service';


@Component({
  selector: 'app-lista-choferes',
  templateUrl: './listar-choferes.component.html',
  styleUrls: ['./listar-choferes.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
<<<<<<< Updated upstream
export class ListarChoferesComponent {
  filtroId= '';
  currentPage = 1;
  itemsPerPage = 6;

  constructor(private router:Router){}
=======
export class ListaChoferesComponent implements OnInit {
  usuarios$: Observable<Usuario[]> | undefined;
  usuarios: Usuario[] = [];
  usuariosFiltrados: Usuario[] = []; // Array para almacenar los usuarios filtrados
  filtroId = '';
  isLoading = false;
  errorMessage = '';
>>>>>>> Stashed changes

  constructor(
    private router: Router,
    private firestoreService: FirestoreDataService
    // private router: Router,
    // private usuariosApi: UsuariosApiService
  ) {}
  
  ngOnInit(): void {
    this.cargarUsuarios();
    // console.log('usuariosApi', this.usuariosApi);
    
  }

  cargarUsuarios() {
    this.usuarios$ = this.firestoreService.getChoferes().pipe(
      catchError(error => {
        console.error('Error:', error);
        this.errorMessage = 'Error al cargar choferes';
        return of([]);
      }),
      finalize(() => this.isLoading = false)
    );
    /*
    this.usuariosApi.listarUsuarios()
      .then(data => {
        this.usuarios = data;
        this.usuariosFiltrados = [...this.usuarios];
        console.log('Usuarios cargados:', this.usuarios);
      })
      .catch(error => {
        console.error('Error al cargar usuarios:', error);
      });
      */
    }

  filtrarUsuarios() {
    if (!this.filtroId) {
      this.usuariosFiltrados = [...this.usuarios]; // Si el filtro está vacío, muestra todos
      return;
    }
    
    this.usuariosFiltrados = this.usuarios.filter(usuario => 
      usuario.uid && usuario.uid.toLowerCase().includes(this.filtroId.toLowerCase())
    );
  }

  limpiar() {
    this.filtroId = '';
    this.usuariosFiltrados = [...this.usuarios];
  }

  return() {
    this.router.navigateByUrl('admin/administrar-cuentas');
  }
<<<<<<< Updated upstream
  get datos(){
    const start = (this.currentPage - 1) * this.itemsPerPage;
    return this.filtroID.slice(start, start + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filtroID.length / this.itemsPerPage);
  }

  cambiarPaginacion(direccion: number) {
    this.currentPage += direccion;
    if (this.currentPage < 1) this.currentPage = 1;
    if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
  }
}
=======
}
>>>>>>> Stashed changes
