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
		cm.sendGetText("һ�����ɵ����������洫��. #b���ţ�123456��#k!");
	}
	else if(status == 1){
		if(cm.getText() == "123456"){
			if(cm.isQuestCompleted(3925))
				cm.warp(260010402);
			else
                                cm.playerMessage(5, "��Ȼ��˵���ˣ������Ż���һ��������");

			cm.dispose();
		}
		else{
			cm.sendOk("#r����!");
		}
	}
	else if(status == 2){
		cm.dispose();
	}
}