import type { NextPage } from 'next';

import CustomHead from '../components/CustomHead';

const Impress: NextPage = () => (
  <>
    <CustomHead title="Plant-Burger Impressum" />
    <main className="text-center">
      <p className="text-2xl pb-4">Impressum</p>
      <p>Julian Daniel Kiesele & Marwin Löhmann Plant-Burger GbR</p>
      <p>
        vertretungsberechtigte Gesellschafter: Julian Daniel Kiesele & Marwin
        Löhmann
      </p>
      <p>Marwin Löhmann</p>
      <p>Droste-Hülshoff-Str.3</p>
      <p>77654 Offenburg</p>
      <br />
      <p>Julian Daniel Kiesele</p>
      <p>Mattenstraße 13</p>
      <p>77767 Appenweier (Urloffen)</p>
      <br />
      <p>
        E-Mail: <a href="mailto:info@plant-burger.de">info@plant-burger.de</a>
      </p>
      <br />
      <p>
        Umsatzsteuer-Identifikationsnummer gem. § 27 a Umsatzsteuergesetz:
        DE354006848
      </p>
      <br />
      <p>Gemäß § 19 UStG ist keine Umsatzsteuer auszuweisen. </p>
      <br />
      <p>
        Redaktionell Verantwortliche: Marwin Löhmann, Droste-Hülshoff-Str. 3,
        77654 Offenburg
      </p>
    </main>
  </>
);

export default Impress;
