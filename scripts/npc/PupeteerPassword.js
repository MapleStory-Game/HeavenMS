var status;

function start(){
	status = -1;
	action(1, 0, 0);
}

function action(mode, type, selection){
	if(mode == -1 || (mode == 0 && status == 0)){
		cm.dispose();
		return;
	}
	else if(mode == 0)
		status--;
	else
		status++;



	if(status == 0){
    if(cm.isQuestStarted(21728)) {
      cm.playerMessage(5, "不知道密码进个J8。");
      cm.warp(105040300);
      cm.completeQuest(21728);
      cm.dispose();
    } else
		cm.sendGetText("一个可疑的声音从洞中传来. #b暗号（123456）#k!");
	}
	else if(status == 1){
		if(cm.getText() == "123456"){
			if(cm.isQuestStarted(20730) && cm.getQuestProgress(20730, 9300285) == 0)
				cm.warp(910510001, 1);
                        else if(cm.isQuestStarted(21731) && cm.getQuestProgress(21731, 9300346) == 0)
				cm.warp(910510001, 1);
			else
                                cm.playerMessage(5, "虽然你说对了，但是一股神秘的力量使你无法进入。");
                                

			cm.dispose();
		}
		else{
			cm.sendOk("#r错误!");
		}
	}
	else if(status == 2){
		cm.dispose();
	}
}