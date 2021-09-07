/*
Angular-sovellukseen sisään tulevan datan pitää olla vahvasti tyypitettyä, 
jotta ei tule mitään väärinkäsityksiä sen suhteen miten sisään tulevaa dataa
käsitellään. Niinpä sovelluksen datalle tehdään tietomalli, joka kertoo 
millaista data on. Tietomalli esitetään luokkien avulla. Luokissa kerrotaan 
millaisia ominaisuuksia sovelluksen datan sisältävillä olioilla pitää olla. 
Luokkien propertyillä on TS-tietotyypit. Tässä tapauksessa kaikki luokat ovat 
samanlaisia eli niissä on vain propertyt id ja info, joten periaatteessa 
pärjättäisiin yhdellä luokalla, mutta nyt luokat voi myöhemmin muokata
erilaisiksi jos on tarpeen.
*/

class Mydata {
  id: number | undefined;
  info: string | undefined;
}

class Study {
  id: number | undefined;
  info: string | undefined;
}

class Hobby {
  id: number | undefined;
  info: string | undefined;
}

export { Mydata, Study, Hobby };
