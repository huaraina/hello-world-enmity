import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React, Dialog } from 'enmity/metro/common';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

import Settings from './components/Settings';

const Patcher = create('hello-world');

const HelloWorld: Plugin = {
   ...manifest,

   onStart() {
      function tryNotifySuccess() {
         try {
            Dialog.show({title: "its loaded, you did it!", body: "finally debugged", confirmText: "now go try it out :3"})
         } catch(e) {
            const oops = new Error(e)
            console.error(oops.stack);
         }
      }
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(HelloWorld);
