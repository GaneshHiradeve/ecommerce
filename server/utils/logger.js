

import { createLogger,format,transports,addColors} from "winston";

const customLevelColors = {
    error: "red",
    warn: "yellow",
    info: "blue",
    http: "green",
    debug: "orange",
  };
  
addColors(customLevelColors);

const customLoggerFormat = format.combine(
    format.timestamp(),
    format.json(),
    format.colorize({ all: true })
  );

const logger = createLogger({
  level: "debug",
  format:customLoggerFormat,
  transports: [new transports.Console()],
  

});

export default logger;