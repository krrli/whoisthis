import { Component } from "@angular/core";
import { Plugins } from "@capacitor/core";

@Component({
  selector: "app-contact",
  templateUrl: "contact.page.html",
  styleUrls: ["contact.page.scss"]
})
export class ContactPage {
  latitude: number;
  longitude: number;
  position = Plugins.Geolocation.getCurrentPosition().then(res => {
    this.latitude = res.coords.latitude;
    this.longitude = res.coords.longitude;
  });
}
