function start() {
    var status = cm.getQuestStatus(20706);
    
    if (status == 0) {
        cm.sendNext("没有什么可疑的地方");
    } else if (status == 1) {
        cm.forceCompleteQuest(20706);
        cm.sendNext("你已经发现了阴影，快回去报告 #p1103001#.");
    } else if (status == 2) {
        cm.sendNext("被发现了，快回去报告 #p1103001#.");
    }
    cm.dispose();
}