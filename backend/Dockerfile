FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

COPY . .

#FIX: give permission to mvnw
RUN chmod +x mvnw

# Build project
RUN ./mvnw clean package -DskipTests

# Run app
ENTRYPOINT ["java", "-jar", "target/StudentManagementSystem-0.0.1-SNAPSHOT.jar"]