import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';
import { Person } from './shared/interfaces/person';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Markos';

  // Step 1: One way binding of data
  person = {
    givenName: 'Markos',
    surname: 'Karampatsis',
    age: 52,
    email: 'marka@aueb.gr'
  }

  // Step 3: Component Input 
  person0: Person = {
    givenName: "Christodoulos",
    surname: "Fragkoudakis",
    age:55,
    email: "chfrag@aueb.gr",
    address: "Athens, Greece"
  }

  person1: Person = {
    givenName: "John",
    surname: "Doe",
    age:32,
    email: "john@example.com",
    address: "New York, USA"
  }

  users: Person[] = [{
    "givenName": "Nanine",
    "surname": "MacGaffey",
    "email": "nmacgaffey0@skyrock.com",
    "age": 1,
    "address": "PO Box 24126"
  }, {
    "givenName": "Ravi",
    "surname": "Dicke",
    "email": "rdicke1@rediff.com",
    "age": 2,
    "address": "PO Box 13529"
  }, {
    "givenName": "Aime",
    "surname": "Brayford",
    "email": "abrayford2@hostgator.com",
    "age": 3,
    "address": "Apt 306"
  }, {
    "givenName": "Davida",
    "surname": "Wyvill",
    "email": "dwyvill3@blog.com",
    "age": 4,
    "address": "Room 1878"
  }, {
    "givenName": "Kori",
    "surname": "Pengelly",
    "email": "kpengelly4@weibo.com",
    "age": 5,
    "address": "17th Floor"
  }, {
    "givenName": "Eddie",
    "surname": "Beazey",
    "email": "ebeazey5@infoseek.co.jp",
    "age": 6,
    "address": "7th Floor"
  }, {
    "givenName": "Alayne",
    "surname": "Brant",
    "email": "abrant6@nifty.com",
    "age": 7,
    "address": "PO Box 49100"
  }, {
    "givenName": "Ogdan",
    "surname": "Bimson",
    "email": "obimson7@furl.net",
    "age": 8,
    "address": "Suite 26"
  }, {
    "givenName": "Camella",
    "surname": "Mulligan",
    "email": "cmulligan8@cisco.com",
    "age": 9,
    "address": "6th Floor"
  }, {
    "givenName": "Zita",
    "surname": "Dodgshun",
    "email": "zdodgshun9@smugmug.com",
    "age": 10,
    "address": "Suite 37"
  }, {
    "givenName": "Kele",
    "surname": "Beuscher",
    "email": "kbeuschera@alexa.com",
    "age": 11,
    "address": "PO Box 88551"
  }, {
    "givenName": "Carlee",
    "surname": "Oddie",
    "email": "coddieb@ebay.com",
    "age": 12,
    "address": "10th Floor"
  }, {
    "givenName": "Chris",
    "surname": "Service",
    "email": "cservicec@ow.ly",
    "age": 13,
    "address": "Apt 758"
  }, {
    "givenName": "Dill",
    "surname": "Bussons",
    "email": "dbussonsd@tamu.edu",
    "age": 14,
    "address": "Apt 1051"
  }, {
    "givenName": "Jillane",
    "surname": "Corinton",
    "email": "jcorintone@blog.com",
    "age": 15,
    "address": "Suite 60"
  }, {
    "givenName": "Bertha",
    "surname": "Mogridge",
    "email": "bmogridgef@wikispaces.com",
    "age": 16,
    "address": "Apt 1691"
  }, {
    "givenName": "Farrand",
    "surname": "Goering",
    "email": "fgoeringg@ocn.ne.jp",
    "age": 17,
    "address": "Suite 13"
  }, {
    "givenName": "Portie",
    "surname": "Edgcombe",
    "email": "pedgcombeh@independent.co.uk",
    "age": 18,
    "address": "PO Box 69262"
  }, {
    "givenName": "Adey",
    "surname": "Bagott",
    "email": "abagotti@jugem.jp",
    "age": 19,
    "address": "Suite 36"
  }, {
    "givenName": "Cosme",
    "surname": "Cubbino",
    "email": "ccubbinoj@nasa.gov",
    "age": 20,
    "address": "Apt 889"
  }]

}
