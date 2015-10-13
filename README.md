# servicenow_table_xml_backup
A very tiny utility that lets you save the tables as XMLs. 

First to install dependencies run

`sudo npm install`

next, configure the `instance_name` the `username` and `password` in `start.js`.

Finally, run `node start.js`

Start.js would

- Create a new folder with the current date.
- Store the XML files of tables you specified in `tables` variable. By default it downloads Business Rules and Script Includes.
- Make sure your schedule doesn't affect the instance loads, and do this only on DEV or QA instances, and never PROD.
