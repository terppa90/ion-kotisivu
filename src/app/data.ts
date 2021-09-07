/*
Tiedosto joka sisältää sovelluksen datan
*/

import { Mydata, Study, Hobby } from './dataclasses';
//import { Study } from './dataclasses';
//import { Hobby } from './dataclasses';

const Mydatas: Mydata[] = [
  { id: 1, info: 'IT-opiskelija' },
  { id: 2, info: 'Asuu Jyväskylän Ainolassa' },
  { id: 3, info: 'Mieliruoka läskisoosi' },
  { id: 4, info: 'Mielijuoma vesi' },
];

const Studies: Study[] = [
  { id: 1, info: 'Tieto- ja viestintätekniikan pt.' },
  { id: 2, info: 'XR-kehittäjä' },
  { id: 3, info: 'Web-kehittäjä' },
];

const Hobbies: Hobby[] = [
  { id: 1, info: 'IT' },
  { id: 2, info: 'Musiikki' },
  { id: 3, info: 'Liikunta' },
  { id: 4, info: 'Elokuvat' },
];

export { Mydatas, Studies, Hobbies };
