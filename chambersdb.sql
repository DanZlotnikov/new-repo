-- --------------------------------------------------------
-- Host:                         database-2.cc8t319gxjqw.eu-central-1.rds.amazonaws.com
-- Server version:               8.0.28 - Source distribution
-- Server OS:                    Linux
-- HeidiSQL Version:             11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for chambers
CREATE DATABASE IF NOT EXISTS `chambers` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `chambers`;

-- Dumping structure for table chambers.brains
CREATE TABLE IF NOT EXISTS `brains` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL DEFAULT '0',
  `object_id` bigint NOT NULL DEFAULT '0',
  `object_type_id` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table chambers.brains: ~5 rows (approximately)
/*!40000 ALTER TABLE `brains` DISABLE KEYS */;
INSERT INTO `brains` (`id`, `user_id`, `object_id`, `object_type_id`) VALUES
	(51, 1, 1, 3),
	(52, 1, 2, 3),
	(54, 1, 3, 1),
	(55, 1, 1, 2),
	(58, 1, 2, 2);
/*!40000 ALTER TABLE `brains` ENABLE KEYS */;

-- Dumping structure for table chambers.comments
CREATE TABLE IF NOT EXISTS `comments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `post_id` bigint NOT NULL DEFAULT '0',
  `author_id` bigint NOT NULL DEFAULT '0',
  `message` varchar(500) NOT NULL DEFAULT '0',
  `created_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table chambers.comments: ~8 rows (approximately)
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` (`id`, `post_id`, `author_id`, `message`, `created_time`, `updated_time`) VALUES
	(1, 1, 2, 'We gotta all unite to save the planet! Go see my highlights in #Knowledge', '2023-02-01 11:17:48', '2023-02-01 11:17:48'),
	(2, 1, 1, 'This is a really complex issue. Check out some of the UN\'s research paper I posted in #Knowledge', '2023-02-01 11:17:48', '2023-02-04 18:34:57'),
	(3, 1, 3, 'Climate change is a complete hoax!!! I JUST posted about it on #Popular', '2023-02-01 11:17:48', '2023-02-01 11:17:48'),
	(4, 1, 4, 'Hey @ElonMusk, would you find a solution already?', '2023-02-01 11:17:48', '2023-02-01 11:17:48');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;

-- Dumping structure for table chambers.knowledge_items
CREATE TABLE IF NOT EXISTS `knowledge_items` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `post_id` bigint NOT NULL DEFAULT '0',
  `uploader_id` bigint NOT NULL DEFAULT '0',
  `title` varchar(100) NOT NULL DEFAULT '0',
  `file_url` varchar(300) NOT NULL DEFAULT '0',
  `item_publish_date` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `original_authors` varchar(100) NOT NULL DEFAULT '0',
  `highlights_count` int NOT NULL DEFAULT '0',
  `created_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table chambers.knowledge_items: ~3 rows (approximately)
/*!40000 ALTER TABLE `knowledge_items` DISABLE KEYS */;
INSERT INTO `knowledge_items` (`id`, `post_id`, `uploader_id`, `title`, `file_url`, `item_publish_date`, `original_authors`, `highlights_count`, `created_time`, `updated_time`) VALUES
	(1, 1, 4, 'Innovation and climate change: A review and introduction to the special issue', 'https://chambers.s3.eu-central-1.amazonaws.com/files/knowledge-items/file1.pdf', '2020-02-01 11:17:48', 'Stelvia Matos, Eric Viardot, Benjamin K. Sovacool, Frank W.Geelsg, Yu Xiong', 45, '2023-02-01 11:17:48', '2023-02-01 11:17:48'),
	(2, 1, 2, 'Adapting to climate change and climate policy: progress, problems and potentials', 'https://chambers.s3.eu-central-1.amazonaws.com/files/knowledge-items/file2.pdf', '2009-02-01 11:17:48', 'Daniel Scott, Susanne Becken', 41, '2023-02-01 11:17:48', '2023-02-01 11:17:48'),
	(3, 1, 1, 'Climate Change Adaptation and Development: Exploring the Linkages', 'https://chambers.s3.eu-central-1.amazonaws.com/files/knowledge-items/file3.pdf', '2007-02-01 11:17:48', 'E. Lisa, F. Schipper', 13, '2023-02-01 11:17:48', '2023-02-01 11:17:48');
/*!40000 ALTER TABLE `knowledge_items` ENABLE KEYS */;

-- Dumping structure for table chambers.popular_items
CREATE TABLE IF NOT EXISTS `popular_items` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `post_id` bigint DEFAULT NULL,
  `uploader_id` bigint NOT NULL DEFAULT '0',
  `platform_type_id` int NOT NULL DEFAULT '0',
  `iframe_url` varchar(300) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `created_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table chambers.popular_items: ~3 rows (approximately)
/*!40000 ALTER TABLE `popular_items` DISABLE KEYS */;
INSERT INTO `popular_items` (`id`, `post_id`, `uploader_id`, `platform_type_id`, `iframe_url`, `created_time`, `updated_time`) VALUES
	(1, 1, 3, 1, 'https://www.youtube.com/embed/xpyrefzvTpI', '2023-02-01 11:17:48', '2023-02-01 11:17:48'),
	(2, 1, 1, 2, 'https://open.spotify.com/embed/episode/76RdMG5Tne7H9jaP7mhkdk/video?utm_source=generator', '2023-02-01 11:17:48', '2023-02-01 11:17:48'),
	(3, 1, 2, 3, 'https://www.tiktok.com/oembed/@scout2015/video/7025299649821003013', '2023-02-01 11:17:48', '2023-02-01 11:17:48');
/*!40000 ALTER TABLE `popular_items` ENABLE KEYS */;

-- Dumping structure for table chambers.posts
CREATE TABLE IF NOT EXISTS `posts` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `author_id` bigint NOT NULL DEFAULT '0',
  `message` varchar(500) NOT NULL DEFAULT '0',
  `created_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `updated_time` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table chambers.posts: ~0 rows (approximately)
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` (`id`, `author_id`, `message`, `created_time`, `updated_time`) VALUES
	(1, 2, 'How much of climate change is caused by humans?', '2023-02-01 11:17:48', '2023-02-01 11:17:48');
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;

-- Dumping structure for table chambers.subcomments
CREATE TABLE IF NOT EXISTS `subcomments` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `comment_id` bigint NOT NULL DEFAULT '0',
  `author_id` bigint NOT NULL DEFAULT '0',
  `message` varchar(500) NOT NULL DEFAULT '0',
  `created_time` datetime DEFAULT NULL,
  `updated_time` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table chambers.subcomments: ~6 rows (approximately)
/*!40000 ALTER TABLE `subcomments` DISABLE KEYS */;
INSERT INTO `subcomments` (`id`, `comment_id`, `author_id`, `message`, `created_time`, `updated_time`) VALUES
	(1, 1, 4, 'YEAH MARGOT LETS GOO', '2023-02-01 16:56:47', '2023-02-01 16:56:48'),
	(3, 2, 3, 'nice', '2023-02-01 16:56:47', '2023-02-01 16:56:48'),
	(4, 2, 4, 'I don\'t need to read it', '2023-02-01 16:56:47', '2023-02-01 16:56:48'),
	(5, 3, 2, 'If you don\'t have anything smart to say, say nothing', '2023-02-01 16:56:47', '2023-02-01 16:56:48'),
	(35, 39, 1, '987666', '2023-02-04 17:19:48', '2023-02-04 17:19:52'),
	(36, 1, 1, '132', '2023-02-04 17:22:25', '2023-02-04 20:01:58'),
	(39, 1, 1, '12312322221', '2023-02-04 20:00:55', '2023-02-04 20:02:44');
/*!40000 ALTER TABLE `subcomments` ENABLE KEYS */;

-- Dumping structure for table chambers.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL DEFAULT '0',
  `last_name` varchar(50) NOT NULL DEFAULT '0',
  `profile_img_url` varchar(500) DEFAULT '0',
  `is_verified` tinyint(1) NOT NULL DEFAULT '0',
  `created_time` datetime NOT NULL,
  `updated_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table chambers.users: ~4 rows (approximately)
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` (`id`, `first_name`, `last_name`, `profile_img_url`, `is_verified`, `created_time`, `updated_time`) VALUES
	(1, 'Dan', 'Zlotnikov', 'https://chambers.s3.eu-central-1.amazonaws.com/images/user-profile-images/profile_pic_dan.jpg', 1, '2023-02-01 11:17:48', '2023-02-01 11:17:48'),
	(2, 'Margot', 'Robbie', 'https://chambers.s3.eu-central-1.amazonaws.com/images/user-profile-images/profile_pic_margot.jpg', 1, '2023-02-01 11:17:48', '2023-02-01 11:17:48'),
	(3, 'Mary', 'Lamb', 'https://chambers.s3.eu-central-1.amazonaws.com/images/user-profile-images/profile_pic_woman.png', 0, '2023-02-01 11:17:48', '2023-02-01 11:17:48'),
	(4, 'Donald', 'Quixote', 'https://chambers.s3.eu-central-1.amazonaws.com/images/user-profile-images/profile_pic_man.jpg', 0, '2023-02-01 11:17:48', '2023-02-01 11:17:48');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;

-- Dumping structure for table chambers.user_identities
CREATE TABLE IF NOT EXISTS `user_identities` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL DEFAULT '0',
  `platform_id` int NOT NULL,
  `created_time` datetime NOT NULL,
  `updated_time` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table chambers.user_identities: ~0 rows (approximately)
/*!40000 ALTER TABLE `user_identities` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_identities` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
