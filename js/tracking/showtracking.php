<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>tracking test</title>
	<style>
		body{margin: 0; padding: 0; font-size: 20px; background-color: #fff;}
		.insert ul{ list-style: none;}
		.insert li{float: left;}
		input{margin-right:20px; font-size: 20px;}
		.show{font-family:"Trebuchet MS",Arial,Helvetica,sans-serif;width:100%;border-collapse:collapse; clear: both; margin-top: 80px;}
		.show td,.show th{font-size:1em;border:1px solid #98bf21;padding:3px 7px 2px 7px}
		.show th{font-size:1.1em;text-align:left;padding-top:5px;padding-bottom:4px;background-color:#a7c942;color:#fff}
		.show tr.alt td{color:#000;background-color:#eaf2d3}
	</style>
</head>
<body>
<div class="container">
	<div class="show">
		<?php 

			require_once '../../db/connect.php';

			if ($conn)
			{
				// insert to database
				$query = "SELECT "
						  ."sum(CASE when type = 'PV' then 1 else 0 end)   AS 'PV',"
						  ."sum(CASE when type = 'Send to Chat' then 1 else 0 end)   AS 'Send to Chat',"
						  ."sum(CASE when type = 'Share on Moments' then 1 else 0 end)   AS 'Share on Moments',"
						  ."sum(CASE when type = 'Share on QQ' then 1 else 0 end)   AS 'Share on QQ',"
						  ."sum(CASE when type = 'Share on Weibo' then 1 else 0 end)   AS 'Share on Weibo',"
						  ."sum(CASE when type = 'man p1' then 1 else 0 end)   AS 'man p1',"
						  ."sum(CASE when type = 'man p2' then 1 else 0 end)   AS 'man p2',"
						  ."sum(CASE when type = 'man p3' then 1 else 0 end)   AS 'man p3',"
						  ."sum(CASE when type = 'man p4' then 1 else 0 end)   AS 'man p4',"
						."sum(CASE when type = 'woman p1' then 1 else 0 end)   AS 'woman p1',"
						."sum(CASE when type = 'woman p2' then 1 else 0 end)   AS 'woman p2',"
						."sum(CASE when type = 'woman p3' then 1 else 0 end)   AS 'woman p3',"
						."sum(CASE when type = 'woman p4' then 1 else 0 end)   AS 'woman p4'"
						." from tracking";

				$result = mysqli_query($conn , $query) or die("Error in query: $query. ".mysql_error());
				echo '<p>query success!</p>';
				// print
				echo "<table>";
				echo "<tr><th>PV</th><th>Send to Chat</th><th>Share on Moments</th><th>Share on QQ</th><th>Share on Weibo</th><th>man p1</th><th>man p2</th><th>man p3</th><th>man p4</th><th>woman p1</th><th>woman p2</th><th>woman p3</th><th>woman p4</th></tr>";
				while($row = mysqli_fetch_array($result))
				{
					echo "<tr><td>". $row['PV'] . "</td>";
					echo "<td>". $row['Send to Chat'] . "</td>";
					echo "<td>". $row['Share on Moments'] . "</td>";
					echo "<td>". $row['Share on QQ'] . "</td>";
					echo "<td>". $row['Share on Weibo'] . "</td>";
					echo "<td>". $row['man p1'] . "</td>";
					echo "<td>". $row['man p2'] . "</td>";
					echo "<td>". $row['man p3'] . "</td>";
					echo "<td>". $row['man p4'] . "</td>";
					echo "<td>". $row['woman p1'] . "</td>";
					echo "<td>". $row['woman p2'] . "</td>";
					echo "<td>". $row['woman p3'] . "</td>";
					echo "<td>". $row['woman p4'] . "</td></tr>";
				}
				echo "</table>";

			}else
			{
				echo 'database is disconnect!';
			}

			mysqli_close($conn);
		?>﻿
	</div>
</div>


<!--tracking
====================================================== -->
<script src="../zepto/zepto.min.js"></script>
<script src="tracking.js"></script>
</body>
</html>