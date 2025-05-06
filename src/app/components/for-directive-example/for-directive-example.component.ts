import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTableComponent } from "../person-table/person-table.component";

@Component({
  selector: 'app-for-directive-example',
  imports: [PersonTableComponent],
  templateUrl: './for-directive-example.component.html',
  styleUrl: './for-directive-example.component.css'
})
export class ForDirectiveExampleComponent {
  users: Person[] = [{
    "givenName": "Nanine",
    "surName": "MacGaffey",
    "email": "nmacgaffey0@skyrock.com",
    "age": 1,
    "address": "PO Box 24126"
  }, {
    "givenName": "Ravi",
    "surName": "Dicke",
    "email": "rdicke1@rediff.com",
    "age": 2,
    "address": "PO Box 13529"
  }, {
    "givenName": "Aime",
    "surName": "Brayford",
    "email": "abrayford2@hostgator.com",
    "age": 3,
    "address": "Apt 306"
  }, {
    "givenName": "Davida",
    "surName": "Wyvill",
    "email": "dwyvill3@blog.com",
    "age": 4,
    "address": "Room 1878"
  }, {
    "givenName": "Kori",
    "surName": "Pengelly",
    "email": "kpengelly4@weibo.com",
    "age": 5,
    "address": "17th Floor"
  }, {
    "givenName": "Eddie",
    "surName": "Beazey",
    "email": "ebeazey5@infoseek.co.jp",
    "age": 6,
    "address": "7th Floor"
  }, {
    "givenName": "Alayne",
    "surName": "Brant",
    "email": "abrant6@nifty.com",
    "age": 7,
    "address": "PO Box 49100"
  }, {
    "givenName": "Ogdan",
    "surName": "Bimson",
    "email": "obimson7@furl.net",
    "age": 8,
    "address": "Suite 26"
  }, {
    "givenName": "Camella",
    "surName": "Mulligan",
    "email": "cmulligan8@cisco.com",
    "age": 9,
    "address": "6th Floor"
  }, {
    "givenName": "Zita",
    "surName": "Dodgshun",
    "email": "zdodgshun9@smugmug.com",
    "age": 10,
    "address": "Suite 37"
  }, {
    "givenName": "Kele",
    "surName": "Beuscher",
    "email": "kbeuschera@alexa.com",
    "age": 11,
    "address": "PO Box 88551"
  }, {
    "givenName": "Carlee",
    "surName": "Oddie",
    "email": "coddieb@ebay.com",
    "age": 12,
    "address": "10th Floor"
  }, {
    "givenName": "Chris",
    "surName": "Service",
    "email": "cservicec@ow.ly",
    "age": 13,
    "address": "Apt 758"
  }, {
    "givenName": "Dill",
    "surName": "Bussons",
    "email": "dbussonsd@tamu.edu",
    "age": 14,
    "address": "Apt 1051"
  }, {
    "givenName": "Jillane",
    "surName": "Corinton",
    "email": "jcorintone@blog.com",
    "age": 15,
    "address": "Suite 60"
  }, {
    "givenName": "Bertha",
    "surName": "Mogridge",
    "email": "bmogridgef@wikispaces.com",
    "age": 16,
    "address": "Apt 1691"
  }, {
    "givenName": "Farrand",
    "surName": "Goering",
    "email": "fgoeringg@ocn.ne.jp",
    "age": 17,
    "address": "Suite 13"
  }, {
    "givenName": "Portie",
    "surName": "Edgcombe",
    "email": "pedgcombeh@independent.co.uk",
    "age": 18,
    "address": "PO Box 69262"
  }, {
    "givenName": "Adey",
    "surName": "Bagott",
    "email": "abagotti@jugem.jp",
    "age": 19,
    "address": "Suite 36"
  }, {
    "givenName": "Cosme",
    "surName": "Cubbino",
    "email": "ccubbinoj@nasa.gov",
    "age": 20,
    "address": "Apt 889"
  }]
}
