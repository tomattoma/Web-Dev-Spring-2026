import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AlbumsComponent } from './components/albums/albums.component';
import { AlbumDetailComponent } from './components/album-detail/album-detail.component';
import { AlbumPhotosComponent } from './components/album-photos/album-photos.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'albums', component: AlbumsComponent }, // Кнопка в меню должна вести сюда
  { path: 'albums/:id', component: AlbumDetailComponent }, // Детали альбома
  { path: 'albums/:id/photos', component: AlbumPhotosComponent }, // Фотки
  { path: '', redirectTo: 'home', pathMatch: 'full' } // Редирект с пустой страницы
];