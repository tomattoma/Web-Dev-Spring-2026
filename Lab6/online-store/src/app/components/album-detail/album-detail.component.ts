import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Album } from '../../models/album';
import { AlbumService } from '../../services/album.service';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html'
})
export class AlbumDetailComponent implements OnInit {
  album!: Album;
  loaded = false;

  constructor(
    private route: ActivatedRoute, 
    private router: Router, 
    private albumService: AlbumService
  ) {}

  ngOnInit() {
    // Получаем ID из URL (например, /albums/5)
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
      this.loaded = true;
    });
  }

  save() {
    this.albumService.updateAlbum(this.album).subscribe(() => {
      alert('Changes saved! (Simulated)');
    });
  }

  goBack() {
    this.router.navigate(['/albums']);
  }
}