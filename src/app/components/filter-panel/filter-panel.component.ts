import { Component } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { JobsService } from 'src/app/services/jobs.service';

import { fadeInAnimation } from 'src/app/fade-in.animation';
@Component({
  selector: 'app-filter-panel',
  templateUrl: './filter-panel.component.html',
  styleUrls: ['./filter-panel.component.scss'],
  animations: [fadeInAnimation],
})
export class FilterPanelComponent {
  public langs: string[] = [];
  constructor(
    private filterService: FilterService,
    private josService: JobsService
  ) {}
  ngOnInit(): void {
    this.filterService.getJobsArr().subscribe((data) => {
      console.log(data);
      this.langs = data;
    });
  }

  deleteLang(lang: string) {
    this.langs = this.langs.filter((item) => item != lang);
    this.filterService.langs.next(this.langs);
  }

  removeAll() {
    this.langs = [];
    this.filterService.langs.next(this.langs);
  }
}
