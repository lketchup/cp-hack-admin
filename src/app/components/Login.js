import React from "react";
import { browserHistory } from "react-router";

export class Login extends React.Component {
  
    render () {
      return (
        <div>
        <script>
          function onSuccess(googleUser) {
            console.log('Signed in as: ' + googleUser.getBasicProfile().getName());
          }
        </script>
        <div class="g-signin2" data-onsuccess="onSuccess"></div>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
        </div>
      );
    }
  }
