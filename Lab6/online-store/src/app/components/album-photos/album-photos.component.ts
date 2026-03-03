import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Photo } from '../../models/photo';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.html',
  styleUrls: ['./album-photos.css']
})
export class AlbumPhotosComponent implements OnInit {
  photos: Photo[] = [];
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    // Вытаскиваем ID из ссылки
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumId = id;

    if (id) {
      this.albumService.getAlbumPhotos(id).subscribe({
        next: (data: Photo[]) => {
          this.photos = data;
          console.log('Фотки загружены:', data.length); // Проверь это в консоли F12
        },
        error: (err) => {
          console.error('Ошибка при загрузке фоток:', err);
        }
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}