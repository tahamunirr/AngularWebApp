import { Component, OnInit } from "@angular/core";
declare const L: any;

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "ass3";
  ngOnInit(): void {
    if (!navigator.geolocation) {
      console.log("Location not supported");
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        var map = L.map("map").setView(
          [position.coords.latitude, position.coords.longitude],
          14
        );
        L.tileLayer(
          "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibDE4MTA2MiIsImEiOiJja3hwdGw4bDkwaDZtMnBwNGY2b3IzcWdtIn0.rIEHiNFJcB3v01914HrEJQ",
          {
            attribution:
              'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 18,
            id: "mapbox/streets-v11",
            tileSize: 512,
            zoomOffset: -1,
            accessToken: "your.mapbox.access.token",
          }
        ).addTo(map);
        let marker = L.marker([
          position.coords.latitude,
          position.coords.longitude,
        ]).addTo(map);
      });
      this.watchPosition();
    }
  }
  watchPosition() {
    let lat = 0;
    let id = navigator.geolocation.watchPosition(
      (position) => {
        console.log(position.coords.latitude, position.coords.longitude);
        if (position.coords.latitude === lat) {
          navigator.geolocation.clearWatch(id);
        }
      },
      (err) => {
        console.log(err);
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 0,
      }
    );
  }
}
