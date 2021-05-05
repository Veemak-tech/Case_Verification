import { AudioRecordingService } from './../../../../services/audio-recording.service';
import { insurerDetails } from './../../../../models/insurerDetails';
import { address } from './../../../../models/address';
import { CasedetailsService } from './../../../../services/casedetails.service';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  NgForm,
  FormBuilder
} from '@angular/forms';
import { casedetails } from './../../../../models/casedetails';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpEventType, HttpHeaders, HttpResponse } from '@angular/common/http';
import {
  Component,
  OnInit,
  ViewChild,
  Output,
  EventEmitter,
  Input,
  OnDestroy,ElementRef,AfterViewInit, ChangeDetectorRef,
} from '@angular/core';
import {
  NgbModal,
  ModalDismissReasons,
  NgbActiveModal,
} from '@ng-bootstrap/ng-bootstrap';
import { id } from '@swimlane/ngx-charts';
import { tap } from 'rxjs/operators';
import { thirdpartyDetails } from 'src/app/models/thirdpartydetails';
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import swal from 'sweetalert';
import { first } from 'rxjs/operators';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import videojs from 'video.js';
import * as adapter from 'webrtc-adapter/out/adapter_no_global.js';
import * as Record from 'videojs-record/dist/videojs.record.js';
import { Observable } from 'rxjs';
let ReecordRTC = require('recordrtc/RecordRTC.min');


@Component({
  selector: 'app-case-edit',
  templateUrl: './case-edit.component.html',
  styleUrls: ['./case-edit.component.scss'],
})
// @Injectable({
//   providedIn: 'root'
// })
export class CaseEditComponent implements OnInit, OnDestroy {
  private selectCaseID: number;
  @Input() Casedetails: casedetails;
  @Input() searchTerm: string;
  private _route: any;
  EditForm: FormGroup;
  form: FormGroup;
  case: casedetails;
  caseForm: NgForm;
  // CasedetailsService: any;
  fetchAll: any;
  casedet$: any;
  submitted = false;
  isRecording = false;
  recordedTime;
  blobUrl;
  vdata:any;
  fileInfos: Observable<any>;
  progress = 0;
  message = ''
  caseidForFileName: any;
  audioBlob;
  adata:any;
  //video
  private stream!: MediaStream;
  private recordRTC: any;

  @ViewChild('video') video;
  // reference to the element itself: used to access events and methods
  // reference to the element itself: used to access events and methods


  public _elementRef!: ElementRef;

  // index to create unique ID for component
  idx = 'clip1';

  private config: any;
  private player: any;
  private plugin: any;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private caseservice: CasedetailsService,
    private formbuilder: FormBuilder,
    private toastrService: ToastrService,
    private audiorecordservice : AudioRecordingService,
    private sanitizer : DomSanitizer,
    elementRef: ElementRef,
    private ref: ChangeDetectorRef,
  ) {
    // Audio Record
    this.audiorecordservice.recordingFailed().subscribe(() => {
      this.isRecording = false;
    });

    this.audiorecordservice.getRecordedTime().subscribe((time) => {
      this.recordedTime = time;
    });

    this.audiorecordservice.getRecordedBlob().subscribe((data) => {
      debugger
      this.blobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
      this.audioBlob = data.blob
      //this.audioName = data.title;
      //this.audioBlobUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(data.blob));
      this.ref.detectChanges();

    });



    //---------------------------------------------Audio Reco End---------------------------
    var ID: number;

    this.route.queryParams.subscribe((params) => {
      debugger;
      ID = params['ID'];
    });

    this.caseservice.getByID(ID).subscribe((data: casedetails) => {
      console.log(data);
      this.case = data[0];
      debugger;
      this.EditForm = new FormGroup({
        ID:new FormControl(this.case['ID']),
        CaseID: new FormControl(this.case['CaseID'], [Validators.required,Validators.minLength(5), Validators.maxLength(10)]),
        ReferenceNumber: new FormControl(this.case['ReferenceNumber'], [Validators.required,Validators.minLength(5), Validators.maxLength(10)]),
        DueDate: new FormControl(this.case['DueDate'], [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
        Name: new FormControl(this.case['Name'], [Validators.required,Validators.minLength(5),Validators.maxLength(15)]),
        Description: new FormControl(this.case['Description'], [ Validators.required,Validators.minLength(5),Validators.maxLength(256)]),
        InsurerName: new FormControl(this.case['InsurerName'], [Validators.required,Validators.minLength(2),Validators.maxLength(20)]),
        PhoneNumber: new FormControl(this.case['PhoneNumber'], [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
        EmailID: new FormControl(this.case['EmailID'], [Validators.required,Validators.email,Validators.maxLength(40)]),
        I_AddressLine1: new FormControl(this.case['I_AddressLine1'], [ Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        I_AddressLine2: new FormControl(this.case['I_AddressLine2'], [Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        I_City: new FormControl(this.case['I_City'], [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
        I_State: new FormControl(this.case['I_State'], [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
        I_Pincode: new FormControl(this.case['I_Pincode'], [Validators.required,Validators.minLength(6),Validators.maxLength(6)]),
        I_Landmark: new FormControl(this.case['I_Landmark'], [Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        InsurerVerificationNotes: new FormControl(this.case['InsurerVerificationNotes'],[Validators.required,Validators.minLength(5),Validators.maxLength(250)] ),
        ThirdpartyName: new FormControl(this.case['ThirdpartyName'], [Validators.required,Validators.minLength(2),Validators.maxLength(30)]),
        T_PhoneNumber: new FormControl(this.case['T_PhoneNumber'], [Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
        T_EmailID: new FormControl(this.case['T_EmailID'], [Validators.required,Validators.email,Validators.maxLength(40)]),
        T_AddressLine1: new FormControl(this.case['T_AddressLine1'], [Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        T_AddressLine2: new FormControl(this.case['T_AddressLine2'], [Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        T_City: new FormControl(this.case['T_City'], [Validators.required,Validators.minLength(3),Validators.maxLength(20)]),
        T_State: new FormControl(this.case['T_State'], [Validators.required,Validators.minLength(3),Validators.maxLength(25)]),
        T_Pincode: new FormControl(this.case['T_Pincode'], [Validators.required ,Validators.minLength(6),Validators.maxLength(6)]),
        T_Landmark: new FormControl(this.case['T_Landmark'], [Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
        T_VerificationNotes: new FormControl(this.case['T_VerificationNotes'], [ Validators.required,Validators.minLength(5),Validators.maxLength(250)]),

        CreatedBy: new FormControl(this.case['CreatedBy']),
        LastModifiedBy: new FormControl(this.case['LastModifiedBy']),
        insAddress: new FormControl(this.case['insAddress']),
        insDetails: new FormControl(this.case['insDetails']),
        tpartyDetails: new FormControl(this.case['tpartyDetails']),
        AddressLine1: new FormControl(this.case['AddressLine1']),
        AddressLine2: new FormControl(this.case['AddressLine2']),
        City: new FormControl(this.case['City']),
        State: new FormControl(this.case['State']),
        Landmark: new FormControl(this.case['Landmark']),
        Pincode: new FormControl(this.case['Pincode']),
       // I_CaseID: new FormControl(this.case['I_CaseID']),
        I_AddressID: new FormControl(this.case['I_AddressID']),
        T_AddressID: new FormControl(this.case['T_AddressID']),
      });

      this.caseidForFileName = this.case.CaseID
      console.log(this.caseidForFileName + " its me")
    });

    // video record
    this.player = false;

    // save reference to plugin (so it initializes)
    this.plugin = Record;

    // video.js configuration
    this.config = {
      frameWidth: 10,
      frameHeight: 10,
      controls: true,
      autoplay: false,
      fluid: true,
      loop: false,
      width: 320,
      height: 240,
      bigPlayButton: false,
      controlBar: {
        volumePanel: true
      },
      plugins: {
        /*
        // wavesurfer section is only needed when recording audio-only
        wavesurfer: {
            backend: 'WebAudio',
            waveColor: '#36393b',
            progressColor: 'black',
            debug: true,
            cursorWidth: 1,
            displayMilliseconds: true,
            hideScrollbar: true,
            plugins: [
                // enable microphone plugin
                WaveSurfer.microphone.create({
                    bufferSize: 4096,
                    numberOfInputChannels: 1,
                    numberOfOutputChannels: 1,
                    constraints: {
                        video: false,
                        audio: true
                    }
                })
            ]
        },
        */
        // configure videojs-record plugin
        record: {
          audio: true,
          video: true,
          debug: true,
          maxLength: 3600,
          displayMilliseconds: true,

        }
      }
    };
  }



  _downloadFile(data: any, type: string, filename: string): any {
    const blob = new Blob([data], { type: type });
    const url = window.URL.createObjectURL(blob);
    //this.video.srcObject = stream;
    //const url = data;
    const anchor = document.createElement('a');
    anchor.download = filename;
    anchor.href = url;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);


  }

  // update

  get f() {
    return this.EditForm.controls;
  }

  ngOnInit(): void {}

  alertthis() {

    this.submitted = true;

    if (this.EditForm.invalid) {
      return
      //alert('invalid details');
    } else {
      debugger;
      //  alert("it's me !!")
      let sendvdata = this.vdata
      let sendAdata = this.adata
      this.caseservice
        .update(this.route.queryParams, this.EditForm.value)
        .subscribe((result) => {
          console.log('Case Details updated!');

           swal( {
        icon:"success",
        title:"Case Details Updated Succesfully!!",
        buttons: [false],
        timer: 1500,
      });

      // Video Upload
      this.caseservice.upload(sendvdata).subscribe(
        (event) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round((100 * event.loaded) / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.fileInfos = this.caseservice.getFiles();
          }
        },
        (err) => {
          this.progress = 0;
          this.message = 'Could not upload the file!';
          //this.sendvdata = undefined;
        }
      )

      // Audio Upload
      var audioName= "my-audio"
    //var Audioblob = this._downloadFile(this.audioBlob, 'audio/mp3', audioName);

    this.adata = this.audioBlob

      this.caseservice.uploadAudio(this.adata,this.caseidForFileName).subscribe(
        (event) => {
          debugger
          if (event.type === HttpEventType.UploadProgress) {
            this.progress = Math.round((100 * event.loaded) / event.total);
          } else if (event instanceof HttpResponse) {
            this.message = event.body.message;
            this.fileInfos = this.caseservice.getFiles();
          }
        },
        (err) => {
          this.progress = 0;
          this.message = 'Could not upload the file!';
          //this.sendvdata = undefined;
        }
      )


      // debugger;
      this.router.navigate(['/products/digital/digital-product-list']);
        });
    }
  }

  // Audio Record
  startRecording() {
    if (!this.isRecording) {
      this.isRecording = true;
      this.audiorecordservice.startRecording();
    }
  }

  abortRecording() {
    if (this.isRecording) {
      this.isRecording = false;
      this.audiorecordservice.abortRecording();
    }
  }

  stopRecording() {
    if (this.isRecording) {
      this.audiorecordservice.stopRecording();
      this.isRecording = false;
    }
  }



  clearRecordedData() {
    this.blobUrl = null;
  }

  ngOnDestroy(): void {
    this.abortRecording();

    // Video Record
    if (this.player) {
      this.player.dispose();
      this.player = false;
    }
  }

  // audio recor dend----------------------------------------------

  // video record start----------------------------------------------


  // use ngAfterViewInit to make sure we initialize the videojs element
  // after the component template itself has been rendered
  ngAfterViewInit() {
    // ID with which to access the template's video element
    let el = 'video_' + this.idx;

    // setup the player via the unique element ID
    this.player = videojs(document.getElementById(el), this.config, () => {
      console.log('player ready! id:', el);

      // print version information at startup
      var msg = 'Using video.js ' + videojs.VERSION +
        ' with videojs-record ' + videojs.getPluginVersion('record') +
        ' and recordrtc ' + RecordRTC.version;
      videojs.log(msg);
    });

    // device is ready
    this.player.on('deviceReady', () => {
      console.log('device is ready!');
    });

    // user clicked the record button and started recording
    this.player.on('startRecord', () => {
      console.log('started recording!');
    });

    // user completed recording and stream is available
    this.player.on('finishRecord', (_player: any) => {
      // recordedData is a blob object containing the recorded data that
      // can be downloaded by the user, stored on server etc.

      var curecttime = new Date()
      var mytime = curecttime.toDateString()
      var time = String(mytime)
        // show save as dialog
       var videodata = this.player.record().saveAs({'video': 'my-video-file-name ' + time + '.webm' });
      let sendvideodata = this.player.recordedData
      this.vdata = sendvideodata
      // console.log(videodata)

    });



    // error handling
    this.player.on('error', (element, error) => {
      console.warn(error);
    });

    this.player.on('deviceError', () => {
      console.error('device error:', this.player.deviceErrorCode);
    });

    // audio record
    let video:HTMLVideoElement = this.video.nativeElement;
    video.muted = false;
    video.controls = true;
    video.autoplay = false;
  }

  // use ngOnDestroy to detach event handlers and remove the player







  // casedetailsupdate(){
  //   this.submitted = true;

  //   if (this.EditForm.invalid){
  //     return;
  //   }
  //   else{

  //      debugger;
  //   this.caseservice.update(this.route.queryParams,this.EditForm.value)
  //   .subscribe((result)=>{
  //     console.log("Case Details updated!");

  //     // this.toastrService.success('Case Details Updated');
  //     // window.alert("success")
  //     // swal("Hello world!");
  //     // swal({
  //     //   icon: "success",
  //     //   buttons: [false],
  //     // });

  //     // swal( {
  //     //   icon:"success",
  //     //   title:"Case Details Updated Succesfully!!",
  //     //   buttons: [false],
  //     //   timer: 1500,
  //     // });
  //     // // debugger;
  //     // this.router.navigate(['/products/digital/digital-product-list']);

  //   });
  //   }

  // }
}
