const InitModule: nkruntime.InitModule = function (
  ctx,
  logger,
  nk,
  initializer
) {
  initializer.registerAfterAddFriends(afterAddFriends);
  initializer.registerAfterAddGroupUsers(afterAddGroupUsers);
  initializer.registerAfterAuthenticateApple(afterAuthenticateApple);
  initializer.registerAfterAuthenticateCustom(afterAuthenticateCustom);
  initializer.registerAfterAuthenticateDevice(afterAuthenticateDevice);
  initializer.registerAfterAuthenticateEmail(afterAuthenticateEmail);
  initializer.registerAfterAuthenticateFacebook(afterAuthenticateFacebook);
  initializer.registerAfterAuthenticateFacebookInstantGame(afterAuthenticateFacebookInstantGame);
  initializer.registerAfterAuthenticateGameCenter(afterAuthenticateGameCenter);
  initializer.registerAfterAuthenticateGoogle(afterAuthenticateGoogle);
  initializer.registerAfterAuthenticateSteam(afterAuthenticateSteam);
  initializer.registerAfterBanGroupUsers(afterBanGroupUsers);
  initializer.registerAfterBlockFriends(afterBlockFriends);
  initializer.registerAfterCreateGroup(afterCreateGroup);
  initializer.registerAfterDeleteFriends(afterDeleteFriends);
  initializer.registerAfterDeleteGroup(afterDeleteGroup);
  initializer.registerAfterDeleteLeaderboardRecord(afterDeleteLeaderboardRecord);
  // @ts-ignore
  initializer.registerAfterDeleteNotification(afterDeleteNotification);
  initializer.registerAfterDeleteStorageObjects(afterDeleteStorageObjects);
  initializer.registerAfterDemoteGroupUsers(afterDemoteGroupUsers);
  initializer.registerAfterEvent(afterEvent);
  initializer.registerAfterGetAccount(afterGetAccount);
  initializer.registerAfterGetUsers(afterGetUsers);
  initializer.registerAfterImportFacebookFriends(afterImportFacebookFriends);
  initializer.registerAfterImportSteamFriends(afterImportSteamFriends);
  initializer.registerAfterJoinGroup(afterJoinGroup);
  initializer.registerAfterJoinTournament(afterJoinTournament);
  initializer.registerAfterKickGroupUsers(afterKickGroupUsers);
  initializer.registerAfterLeaveGroup(afterLeaveGroup);
  initializer.registerAfterLinkApple(afterLinkApple);
  initializer.registerAfterLinkCustom(afterLinkCustom);
  initializer.registerAfterLinkDevice(afterLinkDevice);
  initializer.registerAfterLinkEmail(afterLinkEmail);
  initializer.registerAfterLinkFacebook(afterLinkFacebook);
  initializer.registerAfterLinkFacebookInstantGame(afterLinkFacebookInstantGame);
  initializer.registerAfterLinkGameCenter(afterLinkGameCenter);
  initializer.registerAfterLinkGoogle(afterLinkGoogle);
  initializer.registerAfterLinkSteam(afterLinkSteam);
  initializer.registerAfterListChannelMessages(afterListChannelMessages);
  initializer.registerAfterListFriends(afterListFriends);
  initializer.registerAfterListGroupUsers(afterListGroupUsers);
  initializer.registerAfterListGroups(afterListGroups);
  initializer.registerAfterListLeaderboardRecords(afterListLeaderboardRecords);
  initializer.registerAfterListLeaderboardRecordsAroundOwner(afterListLeaderboardRecordsAroundOwner);
  initializer.registerAfterListMatches(afterListMatches);
  initializer.registerAfterListNotifications(afterListNotifications);
  initializer.registerAfterListStorageObjects(afterListStorageObjects);
  initializer.registerAfterListTournamentRecords(afterListTournamentRecords);
  initializer.registerAfterListTournamentRecordsAroundOwner(afterListTournamentRecordsAroundOwner);
  initializer.registerAfterListTournaments(afterListTournaments);
  initializer.registerAfterListUserGroups(afterListUserGroups);
  initializer.registerAfterPromoteGroupUsers(afterPromoteGroupUsers);
  initializer.registerAfterReadStorageObjects(afterReadStorageObjects);
  initializer.registerAfterUnlinkApple(afterUnlinkApple);
  initializer.registerAfterUnlinkCustom(afterUnlinkCustom);
  initializer.registerAfterUnlinkDevice(afterUnlinkDevice);
  initializer.registerAfterUnlinkEmail(afterUnlinkEmail);
  initializer.registerAfterUnlinkFacebook(afterUnlinkFacebook);
  initializer.registerAfterUnlinkFacebookInstantGame(afterUnlinkFacebookInstantGame);
  initializer.registerAfterUnlinkGameCenter(afterUnlinkGameCenter);
  initializer.registerAfterUnlinkGoogle(afterUnlinkGoogle);
  initializer.registerAfterUnlinkSteam(afterUnlinkSteam);
  initializer.registerAfterUpdateAccount(afterUpdateAccount);
  initializer.registerAfterUpdateGroup(afterUpdateGroup);
  initializer.registerAfterValidatePurchaseApple(afterValidatePurchaseApple);
  initializer.registerAfterValidatePurchaseGoogle(afterValidatePurchaseGoogle);
  initializer.registerAfterValidatePurchaseHuawei(afterValidatePurchaseHuawei);
  initializer.registerAfterWriteLeaderboardRecord(afterWriteLeaderboardRecord);
  initializer.registerAfterWriteStorageObjects(afterWriteStorageObjects);
  initializer.registerAfterWriteTournamentRecord(afterWriteTournamentRecord);

  initializer.registerBeforeAddFriends(beforeAddFriends);
  initializer.registerBeforeAddGroupUsers(beforeAddGroupUsers);
  initializer.registerBeforeAuthenticateApple(beforeAuthenticateApple);
  initializer.registerBeforeAuthenticateCustom(beforeAuthenticateCustom);
  initializer.registerBeforeAuthenticateDevice(beforeAuthenticateDevice);
  initializer.registerBeforeAuthenticateEmail(beforeAuthenticateEmail);
  initializer.registerBeforeAuthenticateFacebook(beforeAuthenticateFacebook);
  initializer.registerBeforeAuthenticateFacebookInstantGame(beforeAuthenticateFacebookInstantGame);
  initializer.registerBeforeAuthenticateGameCenter(beforeAuthenticateGameCenter);
  initializer.registerBeforeAuthenticateGoogle(beforeAuthenticateGoogle);
  initializer.registerBeforeAuthenticateSteam(beforeAuthenticateSteam);
  initializer.registerBeforeBanGroupUsers(beforeBanGroupUsers);
  initializer.registerBeforeBlockFriends(beforeBlockFriends);
  initializer.registerBeforeCreateGroup(beforeCreateGroup);
  initializer.registerBeforeDeleteFriends(beforeDeleteFriends);
  initializer.registerBeforeDeleteGroup(beforeDeleteGroup);
  initializer.registerBeforeDeleteLeaderboardRecord(beforeDeleteLeaderboardRecord);
  // @ts-ignore
  initializer.registerBeforeDeleteNotification(beforeDeleteNotification);
  initializer.registerBeforeDeleteStorageObjects(beforeDeleteStorageObjects);
  initializer.registerBeforeDemoteGroupUsers(beforeDemoteGroupUsers);
  initializer.registerBeforeEvent(beforeEvent);
  initializer.registerBeforeGetAccount(beforeGetAccount);
  initializer.registerBeforeGetUsers(beforeGetUsers);
  initializer.registerBeforeImportFacebookFriends(beforeImportFacebookFriends);
  initializer.registerBeforeImportSteamFriends(beforeImportSteamFriends);
  initializer.registerBeforeJoinGroup(beforeJoinGroup);
  initializer.registerBeforeJoinTournament(beforeJoinTournament);
  initializer.registerBeforeKickGroupUsers(beforeKickGroupUsers);
  initializer.registerBeforeLeaveGroup(beforeLeaveGroup);
  initializer.registerBeforeLinkApple(beforeLinkApple);
  initializer.registerBeforeLinkCustom(beforeLinkCustom);
  initializer.registerBeforeLinkDevice(beforeLinkDevice);
  initializer.registerBeforeLinkEmail(beforeLinkEmail);
  initializer.registerBeforeLinkFacebook(beforeLinkFacebook);
  initializer.registerBeforeLinkFacebookInstantGame(beforeLinkFacebookInstantGame);
  initializer.registerBeforeLinkGameCenter(beforeLinkGameCenter);
  initializer.registerBeforeLinkGoogle(beforeLinkGoogle);
  initializer.registerBeforeLinkSteam(beforeLinkSteam);
  initializer.registerBeforeListChannelMessages(beforeListChannelMessages);
  initializer.registerBeforeListFriends(beforeListFriends);
  initializer.registerBeforeListGroupUsers(beforeListGroupUsers);
  initializer.registerBeforeListGroups(beforeListGroups);
  initializer.registerBeforeListLeaderboardRecords(beforeListLeaderboardRecords);
  initializer.registerBeforeListLeaderboardRecordsAroundOwner(beforeListLeaderboardRecordsAroundOwner);
  initializer.registerBeforeListMatches(beforeListMatches);
  initializer.registerBeforeListNotifications(beforeListNotifications);
  initializer.registerBeforeListStorageObjects(beforeListStorageObjects);
  initializer.registerBeforeListTournamentRecords(beforeListTournamentRecords);
  initializer.registerBeforeListTournamentRecordsAroundOwner(beforeListTournamentRecordsAroundOwner);
  initializer.registerBeforeListTournaments(beforeListTournaments);
  initializer.registerBeforeListUserGroups(beforeListUserGroups);
  initializer.registerBeforePromoteGroupUsers(beforePromoteGroupUsers);
  initializer.registerBeforeReadStorageObjects(beforeReadStorageObjects);
  initializer.registerBeforeUnlinkApple(beforeUnlinkApple);
  initializer.registerBeforeUnlinkCustom(beforeUnlinkCustom);
  initializer.registerBeforeUnlinkDevice(beforeUnlinkDevice);
  initializer.registerBeforeUnlinkEmail(beforeUnlinkEmail);
  initializer.registerBeforeUnlinkFacebook(beforeUnlinkFacebook);
  initializer.registerBeforeUnlinkFacebookInstantGame(beforeUnlinkFacebookInstantGame);
  initializer.registerBeforeUnlinkGameCenter(beforeUnlinkGameCenter);
  initializer.registerBeforeUnlinkGoogle(beforeUnlinkGoogle);
  initializer.registerBeforeUnlinkSteam(beforeUnlinkSteam);
  initializer.registerBeforeUpdateAccount(beforeUpdateAccount);
  initializer.registerBeforeUpdateGroup(beforeUpdateGroup);
  initializer.registerBeforeValidatePurchaseApple(beforeValidatePurchaseApple);
  initializer.registerBeforeValidatePurchaseGoogle(beforeValidatePurchaseGoogle);
  initializer.registerBeforeValidatePurchaseHuawei(beforeValidatePurchaseHuawei);
  initializer.registerBeforeWriteLeaderboardRecord(beforeWriteLeaderboardRecord);
  initializer.registerBeforeWriteStorageObjects(beforeWriteStorageObjects);
  initializer.registerBeforeWriteTournamentRecord(beforeWriteTournamentRecord);

  initializer.registerRtAfter("ChannelJoin", afterChannelJoin);
  initializer.registerRtAfter("ChannelLeave", afterChannelLeave);
  initializer.registerRtAfter("ChannelMessageRemove", afterChannelMessageRemove);
  initializer.registerRtAfter("ChannelMessageSend", afterChannelMessageSend);
  initializer.registerRtAfter("ChannelMessageUpdate", afterChannelMessageUpdate);
  initializer.registerRtAfter("MatchCreate", afterMatchCreate);
  initializer.registerRtAfter("MatchDataSend", afterMatchDataSend);
  initializer.registerRtAfter("MatchJoin", afterMatchJoin);
  initializer.registerRtAfter("MatchLeave", afterMatchLeave);
  initializer.registerRtAfter("MatchmakerAdd", afterMatchmakerAdd);
  initializer.registerRtAfter("MatchmakerRemove", afterMatchmakerRemove);
  initializer.registerRtAfter("Ping", afterPing);
  initializer.registerRtAfter("Pong", afterPong);
  initializer.registerRtAfter("StatusFollow", afterStatusFollow);
  initializer.registerRtAfter("StatusUnfollow", afterStatusUnfollow);
  initializer.registerRtAfter("StatusUpdate", afterStatusUpdate);

  initializer.registerRtBefore("ChannelJoin", beforeChannelJoin);
  initializer.registerRtBefore("ChannelLeave", beforeChannelLeave);
  initializer.registerRtBefore("ChannelMessageRemove", beforeChannelMessageRemove);
  initializer.registerRtBefore("ChannelMessageSend", beforeChannelMessageSend);
  initializer.registerRtBefore("ChannelMessageUpdate", beforeChannelMessageUpdate);
  initializer.registerRtBefore("MatchCreate", beforeMatchCreate);
  initializer.registerRtBefore("MatchDataSend", beforeMatchDataSend);
  initializer.registerRtBefore("MatchJoin", beforeMatchJoin);
  initializer.registerRtBefore("MatchLeave", beforeMatchLeave);
  initializer.registerRtBefore("MatchmakerAdd", beforeMatchmakerAdd);
  initializer.registerRtBefore("MatchmakerRemove", beforeMatchmakerRemove);
  initializer.registerRtBefore("Ping", beforePing);
  initializer.registerRtBefore("Pong", beforePong);
  initializer.registerRtBefore("StatusFollow", beforeStatusFollow);
  initializer.registerRtBefore("StatusUnfollow", beforeStatusUnfollow);
  initializer.registerRtBefore("StatusUpdate", beforeStatusUpdate);

  initializer.registerLeaderboardReset(registerLeaderboardReset);
  //registerMatch < State = MatchState > (name: string, functions: MatchHandler<State>): void;
  initializer.registerMatch("", match);
  initializer.registerMatchmakerMatched(matchmakerMatched);
  initializer.registerTournamentEnd(tournamentEnd);
  initializer.registerTournamentReset(tournamentReset);
};