import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './albums.html', // Проверь, что файл в папке называется так же
  styleUrls: ['./albums.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loaded: boolean = false;

  constructor(private albumService: AlbumService) {}

ngOnInit(): void {
  console.log('Загрузка списка альбомов...'); // Проверь это в консоли браузера (F12)
  this.albumService.getAlbums().subscribe({
    next: (data) => {
      this.albums = data;
      this.loaded = true;
    },
    error: (err) => console.error('Ошибка при загрузке альбомов:', err)
  });
}

  deleteAlbum(id: number): void {
    this.albums = this.albums.filter(a => a.id !== id);
    this.albumService.deleteAlbum(id).subscribe();
  }
}