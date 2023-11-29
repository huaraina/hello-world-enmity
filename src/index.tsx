import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

import Settings from './components/Settings';

const Patcher = create('hello-world');

const HelloWorld: Plugin = {
   ...manifest,

   onStart() {
      console.log("its loaded, ig"); // this is literally just for filling the whitespace
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(HelloWorld);
