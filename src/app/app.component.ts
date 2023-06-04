import { Component, OnInit } from '@angular/core';
import { JobsService } from './services/jobs.service';
import { IJobs } from './models/IJob';
import { FilterService } from './services/filter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent implements OnInit {
  title = 'static-job-listings-master-angular';
  public jobs: IJobs[] = [];
  public langs: string[] = [];
  public loading: boolean = false;
  public errorMessage: string = '';

  constructor(
    private josService: JobsService,
    private filterService: FilterService
  ) {}
  ngOnInit(): void {
    this.filterService.getJobsArr().subscribe((data) => {
      this.langs = data;
      this.loading = true;
      this.josService.getAllJobs().subscribe(
        (data) => {
          if (this.langs.length !== 0) {
            this.jobs = data.filter((item, index) =>
              this.langs.every((r) =>
                [...item.tools, ...item.languages, item.level].includes(r)
              )
            );
            this.loading = false;
          } else {
            this.jobs = data;
            this.loading = false;
          }
        },
        (error) => {
          this.errorMessage = error;
          this.loading = false;
        }
      );
    });
  }
}
