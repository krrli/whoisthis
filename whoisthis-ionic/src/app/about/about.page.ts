import { Component, NgZone } from "@angular/core";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-about",
  templateUrl: "about.page.html",
  styleUrls: ["about.page.scss"]
})
export class AboutPage {
  image: SafeResourceUrl;

  constructor(
    public navCtrl: NavController,
    private zone: NgZone,
    private sanitizer: DomSanitizer
  ) {}

  async takePicture() {
    const { Camera } = Plugins;

    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera
    });

    // Example of using the Base64 return type. It's recommended to use CameraResultType.Uri
    // instead for performance reasons when showing large, or a large amount of images.
    this.image = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.base64Data
    );
  }
}
