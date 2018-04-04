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
		cm.sendGetText("一个可疑的声音从里面传来. #b暗号（123456）#k!");
	}
	else if(status == 1){
		if(cm.getText() == "123456"){
			if(cm.isQuestCompleted(3925))
				cm.warp(260010402);
			else
                                cm.playerMessage(5, "虽然你说对了，但是门还是一动不动。");

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