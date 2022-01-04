# Private Policy:
Phishem does **not** store data (Guild IDs and Guild names) in the database longer than the time the bot is kept in a server, to be more clear, the bot will **not** store data of that server and it's members after it's been kicked from the server. Any data that gets stored in a database **will be deleted** when the bot leaves a server (which will delete all data of that server from the database and files upon leaving).

The things that Phishem **does collect** is **Guild IDs** and **Server Configurations**, they're stored in a MongoDB cluster, so the developer(s) **can** vew a server's guild ID and their configurations, and all the data of that server will me removed once it get's kicked out of the server. 
If you wish to remove your data you can simply kick the bot from your server, or you can contact the developer Nek at https://discord.gg/vultrex to delete the data, though doing that will render the bot useless until you reconfigure it.
Phishem does **not** store or collect any messages, the bot simply reads the messages throughout the server and if there's a message that trips off the filter(s), it will delete the message, and if there's a log channel configured, it will reidrect that message and link to that log channel. 

tl;dr - The only data that get's stored within the database is: Server IDs, and configurations. If you wish to remove the data, either kick the bot from the server, use the reset option on the slash command, or contect Nek at https://discord.gg/vultrex . 
