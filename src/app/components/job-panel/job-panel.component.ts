import { Component, Input, OnInit } from '@angular/core';
import { IJobs } from 'src/app/models/IJob';
import { FilterService } from 'src/app/services/filter.service';
import { fadeInAnimation } from 'src/app/fade-in.animation';
@Component({
  selector: 'app-job-panel',
  templateUrl: './job-panel.component.html',
  styleUrls: ['./job-panel.component.scss'],
  animations: [fadeInAnimation],
})
export class JobPanelComponent implements OnInit {
  @Input() job: IJobs = {} as IJobs;
  public tools: string[] = [];
  public langs: string[] = [];
  constructor(private filterService: FilterService) {}
  ngOnInit(): void {
    this.tools = [...this.job.languages, ...this.job.tools, this.job.level];
    this.filterService.getJobsArr().subscribe((data) => {
      this.langs = data;
    });
  }

  pushFilterArr(lang: string) {
    this.langs = Array.from(new Set([...this.langs, lang]));
    this.filterService.langs.next(this.langs);
  }
}
