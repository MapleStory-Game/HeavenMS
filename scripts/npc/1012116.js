function start() {
    var status = cm.getQuestStatus(20706);
    
    if (status == 0) {
        cm.sendNext("û��ʲô���ɵĵط�");
    } else if (status == 1) {
        cm.forceCompleteQuest(20706);
        cm.sendNext("���Ѿ���������Ӱ�����ȥ���� #p1103001#.");
    } else if (status == 2) {
        cm.sendNext("�������ˣ����ȥ���� #p1103001#.");
    }
    cm.dispose();
}