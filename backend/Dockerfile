# Use Java 17
FROM eclipse-temurin:17-jdk-alpine

# Set working directory
WORKDIR /app

# Copy all files
COPY . .

# Build the project
RUN ./mvnw clean package -DskipTests

# Run app
ENTRYPOINT ["java", "-jar", "target/StudentManagementSystem-0.0.1-SNAPSHOT.jar"]