@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.
@REM ----------------------------------------------------------------------------

@echo off
setlocal

set "JAVA_CMD=java"
if not "%JAVA_HOME%"=="" set "JAVA_CMD=%JAVA_HOME%\bin\java.exe"

if not exist ".mvn\wrapper\maven-wrapper.jar" (
    echo Downloading Maven Wrapper JAR...
    powershell -Command "New-Item -ItemType Directory -Force -Path '.mvn\wrapper' | Out-Null; Invoke-WebRequest -Uri 'https://repo.maven.apache.org/maven2/org/apache/maven/wrapper/maven-wrapper/3.2.0/maven-wrapper-3.2.0.jar' -OutFile '.mvn\wrapper\maven-wrapper.jar'"
)

"%JAVA_CMD%" -Dmaven.multiModuleProjectDirectory="%~dp0." -classpath ".mvn\wrapper\maven-wrapper.jar" org.apache.maven.wrapper.MavenWrapperMain %*
endlocal
