pipeline{
  agent any 
  stages
  {
    stage('1. checkout'){
      steps{
      git url:'https://github.com/naikharshita04-hub/Docker', branch:'main'
      }
    }
    
    stage('2. Build Image'){
      steps{
        bat 'docker build -t my-node-app .'
      }
    }

    stage('3. Stop old Containers'){
      steps{
        bat 'docker stop mycont || exit 0'
        bat 'docker rm mycont || exit 0'
          }
        }

    stage('4. Run the Image- Containerize'){
      steps{
        bat 'docker run -d -p 3005:3000 --name mycont my-node-app'
      }
    }

    
  }
}
