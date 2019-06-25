<template>
<div class="container-fluid game-board ng-scope">
        <div class="row">
            <div class="col-xs-6">
                Game Name: <b class="ng-binding"></b>
            </div>
            <div class="col-xs-6 ng-binding" style="text-align: right;">
                Ben 
                    <a style="cursor: pointer;" ng-click="gameController.submitPlaying(gameController.currentPlayer.name)">Playing?</a>
            </div>
        </div>

        <div class="row">
            <div class="col-xs-12">
                <div class="players">
                    <!-- ngRepeat: player in gameController.users track by player.name | orderBy : 'name' -->
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <div class="spectators">
                    <strong>Spectators: </strong>
                    <!-- ngRepeat: player in gameController.spectators | orderBy : 'name' --><span ng-repeat="player in gameController.spectators | orderBy : 'name'" class="ng-binding ng-scope">
                        Ben
                    </span><!-- end ngRepeat: player in gameController.spectators | orderBy : 'name' -->
                </div>
            </div>
        </div>


        <div ng-show="gameController.currentPlayer.is_player" class="ng-hide">
            <div class="row">
                <div class="col-xs-12">
                    <hr>
                </div>
            </div>
            <div class="row" style="margin-bottom: 10px;">
                <div class="col-xs-6">
                    <div>
                        <select class="form-control ng-pristine ng-valid" ng-model="gameController.vote" ng-options="vote as vote for vote in gameController.valid_votes"><option value="" selected="selected"></option><option value="0" selected="selected"></option><option value="1">10</option><option value="2">20</option><option value="3">30</option><option value="4">50</option><option value="5">80</option><option value="6">130</option><option value="7">??</option></select>
                        <!--<input class="form-control" type="number" ng-model="poker.estimate" />-->
                    </div>
                </div>
                <div class="col-xs-3">
                    <button class="btn btn-primary" ng-click="gameController.submitVote()">Vote</button>
                </div>
                <div class="col-xs-3">
                </div>
            </div>
            <div class="row">
                <div class="col-xs-12">
                    <hr>
                </div>
            </div>
        </div>
        <!-- ngIf: gameController.currentPlayer.is_admin --><div ng-if="gameController.currentPlayer.is_admin" class="row ng-scope" style="margin-bottom: 10px;">
            <div class="col-xs-3">
                <button class="btn btn-primary" ng-click="gameController.submitReset()">Reset</button>
            </div>
            <div class="col-xs-3">
                <button class="btn btn-primary" ng-click="gameController.submitReveal()">Reveal</button>
            </div>
        </div><!-- end ngIf: gameController.currentPlayer.is_admin -->
        <!-- ngIf: gameController.currentPlayer.is_admin --><div ng-if="gameController.currentPlayer.is_admin" class="row ng-scope" style="margin-bottom: 10px;">
            <div class="col-xs-6">
                <select class="form-control ng-pristine ng-valid" ng-model="gameController.selectedUser" ng-options="user as user for user in gameController.usernames"><option value="?" selected="selected"></option><option value="0">Ben</option></select>
            </div>
            <div class="col-xs-3">
                <button class="btn btn-primary" ng-disabled="!gameController.selectedUser" ng-click="gameController.submitPlaying(gameController.selectedUser)" disabled="disabled">Toggle Playing</button>
            </div>
            <div class="col-xs-3">
                <button class="btn btn-primary" ng-disabled="!gameController.selectedUser" ng-click="gameController.submitPromote(gameController.selectedUser)" disabled="disabled">Promote</button>
            </div>
        </div><!-- end ngIf: gameController.currentPlayer.is_admin -->
    </div>
</template>

<script>
</script>
