@echo off
@title HeavenMS
set CLASSPATH=.;dist\*
Runtime\bin\java -Xmx2048m -Dwzpath=wz\ net.server.Server
pause