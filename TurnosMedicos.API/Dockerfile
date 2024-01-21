# Use an official Maven image as a parent image
FROM maven:3.8.4-openjdk-11 AS build

# Set the working directory in the container
WORKDIR /app

# Copy the POM file and download dependencies
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the application source code
COPY src ./src

# Build the application
RUN mvn package

# Execute ls to list the contents of the target directory
RUN ls /app/target

# Use an official OpenJDK runtime as a parent image
FROM openjdk:11-jre-slim

# Set the working directory in the container
WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/TurnosMedicosAPI-1.0.0.jar .

# Expose port 8080 to the outside world
EXPOSE 8080

# Run the JAR file
CMD ["java", "-jar", "TurnosMedicosAPI-1.0.0.jar"]
