cd /var/webapp/web-project/
localTags=`git tag`
remoteTags=`git ls-remote --tags origin`

if [ "$localTags" = "$remoteTags" ];
  then
    echo "fine"
  else
    echo "update to $localTags" >> /var/webapp/web-project/src/cron/log
    git reset --hard
    git pull origin master
    newestTag=`git ls-remote --tags origin | sort -V | tail -1 | cut -d'/' -f3`
    xmlstarlet ed -L -N s=http://maven.apache.org/POM/4.0.0 -u "/s:project/s:version" -v "$newestTag" pom.xml
    mvn package
    ln -sf "/var/webapp/web-project/target/web-project-$newestTag.jar" /etc/init.d/webapp
    /etc/init.d/webapp restart
fi;
