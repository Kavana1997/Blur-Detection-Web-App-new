pipeline {
    agent any

    environment {
        NODEJS_HOME = "${tool 'NodeJS12'}" // Specify the Node.js installation tool name
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install project dependencies
                    sh "${'NodeJS12'}/bin/npm install"
                }
            }
        }

        stage('Build') {
            steps {
                script {
                    // Run your build process (e.g., npm run build)
                    sh "${'NodeJS12'}/bin/npm run build"
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    // Run your test command (e.g., npm test)
                    sh "${tool 'NodeJS12'}/bin/npm test"
                }
            }
        }

        stage('Archive Artifacts') {
            steps {
                // Archive build artifacts (e.g., the dist folder containing the built files)
                archiveArtifacts artifacts: 'dist/**/*', allowEmptyArchive: true
            }
        }
    }

    post {
        success {
            echo 'Build successful!'

            // Add additional post-build actions if needed
        }

        failure {
            echo 'Build failed. Please check the logs for details.'
        }
    }
}
