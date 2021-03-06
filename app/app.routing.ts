import { LoginComponent } from "./pages/login/login.component";
import { ActivitiesComponent } from "./pages/activities/activities.component";
import { MapComponent } from "./pages/map/map.component";
import { PaymentComponent } from "./pages/payment/payment.component";
import { BrowserComponent } from "./pages/browser/browser.component";
import { SettingsComponent } from "./pages/details/settings.component";
import { ActivityComponent } from "./pages/activity/activity.component";
import { ProfileComponent } from "./pages/profile/profile.component";

export const routes = [
  { path: "", component: MapComponent },
  { path: "activities", component: ActivitiesComponent },
  { path: "login", component: LoginComponent },
  { path: "payment", component: PaymentComponent },
  { path: "browser", component: BrowserComponent },
  { path: "settings", component: SettingsComponent },
  { path: "activity", component: ActivityComponent },
  { path: "profile", component: ProfileComponent }
];

export const navigatableComponents = [
  LoginComponent,
  ActivitiesComponent,
  MapComponent,
  PaymentComponent,
  BrowserComponent,
  SettingsComponent,
  ActivityComponent,
  ProfileComponent
];
