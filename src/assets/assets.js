// Asset exports with direct imports for Vite bundling and static URLs

import mandala from './mandala-jdOIDeh6.webp';
import murti from './murti-DogDNfqS.webp';
import murti2 from './murti-2-luqKOqyF.webp';
import eventSthapana from './sthapana-opt-po5HE-Wf.webp';
import eventAarti from './aarti-opt-DAeVgRo3.webp';
import eventAtharvshish from './atharvshish-opt-BokKd3D3.webp';
import eventSnehbhet from './snehbhet-opt-CGz7vv-w.webp';
import eventMahaprasad from './mahaprasad-opt-B_Zc2sef.webp';
import eventVisarjan from './visarjan-opt-Epp4xHxG.webp';
import gallery1 from './gallery-1-DWEzcB6M.webp';
import gallery2 from './gallery-2-DvEhGxIV.webp';
import gallery3 from './gallery-3-CV0LwziS.webp';
import gallery4 from './gallery-4-sv5dpAxi.webp';
import gallery5 from './gallery-5-DpPEX2vC.webp';
import family1 from './family-1-D6DB0Svu.webp';
import family2 from './family-2-DA8DTEL4.webp';
import family3 from './family-3-CBo3jFmR.webp';
import family4 from './family-4-5BwO33AK.webp';
import flower1 from './flower1-BlVhglJb.webp';
import flower2 from './flower2-579OHsCI.webp';
import flower3 from './flower3-DVMPDr3s.webp';
import bell from './bell-DxDhDReW.webp';
import bell2 from './bell-2-CjaksJjB.webp';
import aarti from './aarti-BmqCfmT2.webp';
import diva from './diva-BREN9I8b.webp';
import diva2 from './diva2-Cj74hIfe.webp';
import divider1 from './divider-1-CA7Shuxn.webp';
import divider2 from './divider-2-B5AQ9qpj.webp';
import divider3 from './divider-3-BtSfoYwr.webp';
import flourish1 from './f1-ADhmizYT.webp';
import flourish2 from './f2-9d8zBFNM.webp';
import leaf from './leaf-C8H5H5Ok.webp';
import logo from './logo-m7LBp2Yu.webp';
import lotus from './lotus-C9mPCXs6.webp';
import pillar from './piller-pvoq_vZm.webp';
import pot from './pot-GXE75GD9.webp';
import shankh from './shankh-KSZvp6xx.webp';
import topLayer from './top-layer-BdL4xo3x.webp';
import bgMusic from './bgMusic-Cx9Z66jg.mp3';

export const assetMap = {
  mandala,
  murti,
  murti2,
  eventSthapana,
  eventAarti,
  eventAtharvshish,
  eventSnehbhet,
  eventMahaprasad,
  eventVisarjan,
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  family1,
  family2,
  family3,
  family4,
  flower1,
  flower2,
  flower3,
  bell,
  bell2,
  aarti,
  diva,
  diva2,
  divider1,
  divider2,
  divider3,
  flourish1,
  flourish2,
  leaf,
  logo,
  lotus,
  pillar,
  pot,
  shankh,
  topLayer,
  bgMusic
};

export const getAsset = (key) => {
  if (!key) return '';
  return assetMap[key] || key;
};

export default assetMap;
