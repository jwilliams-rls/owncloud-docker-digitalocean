cd /var/www/html/config
ls /var/www
cd /var/www/owncloud/config
ls
nano config.php
vi config.php
echo " 'trusted_domains' => array ( 0 => 'localhost', 1 => '137.184.89.141', )," >> config.php
sed -1 '$d' config.php
sed -i '$d' config.php
cat config.php
echo "'trusted_domains' => array ( 0 => 'localhost', 1 => '137.184.89.141', )," > /var/www/owncloud/config/config.php
cat config.php
sed -i "/'trusted_domains' => array (/a\    1 => '137.184.89.141'," /var/www/owncloud/config/config.php
cat config.php
sed -i "s/'trusted_domains' => array ( 0 => 'localhost' )/'trusted_domains' => array ( 0 => 'localhost', 1 => '137.184.89.141' )/" /var/www/owncloud/config/config.php
cat config.php
sed -i "/'trusted_domains' => array (/a\    1 => '137.184.89.141'," /var/www/owncloud/config/config.php
cat config.php
docker cp server-owncloud-1:/var/www/owncloud/config/config.php ~/config.php
exit
