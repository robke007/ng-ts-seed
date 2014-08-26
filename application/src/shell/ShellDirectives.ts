/**
 * Created by robbie on 8/26/14.
 */
/// <reference path="../reference.ts" />

declare var $;
module NgTsSeed{
    export class ShellDirectives{
        static Init(app: any){
            app.directive('shell', function(){
                return {
                    restrict: 'E',
                    templateUrl: 'shell/partials/shell.html',
                    replace:true,
                    controller: 'ShellController'
                }
            });
        }
    }
}

